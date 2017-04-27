package definiti.formvalidation

import definiti.api.Context
import definiti.{AttributeDefinition, DefinedType, NativeClassDefinition, Root}

object FormValidationGenerator {
  def generate(root: Root)(implicit context: Context): String = {
    val projectTypes = root.classDefinitions.collect {
      case definedType: DefinedType => definedType
    }

    s"""
       |$validationHelpers
       |
       |${projectTypes.map(generateDefinedType).mkString("\n\n")}
     """.stripMargin
  }

  private def validationHelpers(): String = {
    s"""
       |function validateList<A>(list: ListWrapper<A>, validation: (A) => boolean): ListWrapper<any>|null {
       |  const validations = list.map(validation);
       |  if (validations.exists(element => element !== null)) {
       |    return validations;
       |  } else {
       |    return null;
       |  }
       |}
     """.stripMargin
  }

  private def generateDefinedType(definedType: DefinedType)(implicit context: Context): String = {
    val attributeValidations = definedType.attributes.map(attribute => generateAttributeValidation(attribute, "value")).mkString(",")
    s"""
       |export function validate${definedType.name}(value: ${definedType.name}): any {
       |  const result = {
       |    $attributeValidations
       |  };
       |
       |  let hasError = false;
       |  for (let key in result) {
       |    if (result.hasOwnProperty(key) && result[key] !== null) {
       |      hasError = true;
       |      break;
       |    }
       |  }
       |
       |  if (hasError) {
       |    return result;
       |  } else {
       |    const errorOnValidation = validateBuilt${definedType.name}(value);
       |    if (errorOnValidation) {
       |      return errorOnValidation;
       |    } else {
       |      return null;
       |    }
       |  }
       |}
    """.stripMargin
  }

  private def generateAttributeValidation(attribute: AttributeDefinition, containerName: String)(implicit context: Context): String = {
    context.findType(attribute.typeReference.typeName) match {
      case Some(definedType: DefinedType) =>
        s"""${attribute.name}: validate${definedType.name}($containerName.${attribute.name})"""
      case Some(nativeClassDefinition: NativeClassDefinition) if nativeClassDefinition.name == "List" =>
        s"""${attribute.name}: validateList($containerName.${attribute.name}, validate${attribute.genericTypes.head.typeName})"""
      case _ =>
        s"""${attribute.name}: null"""
    }
  }
}
