# Definiti - form validation

For core project, see [Definiti/Definiti](https://github.com/definiti/definiti).
For typescript model project, see [Definiti/Definiti Typescript model](https://github.com/definiti/definiti-typescript-model).

## Get started

⚠ This project is the subject of active research.
It is not ready for production use yet.

This part describes how to test the generator with the core compiler.
For more advanced usage, please come back later.

### Dependency: Core

Clone the repository:

```sh
$ git clone git@github.com:definiti/definiti.git
```

Go into the project and publish to local repository:

```
$ cd definiti
$ sbt publishLocal
```

⚠️ Be careful of the core version during development.
Check it in `build.sbt` file of each project.

### Dependency: Typescript model

Clone the repository:

```sh
$ git clone git@github.com:definiti/definiti-typescript-model.git
```

Go into the project and publish to local repository:

```
$ cd definiti-typescript-model
$ sbt publishLocal
```

⚠️ Be careful of the typescript-model version during development.
Check it in `build.sbt` file of each project.

### Form validation generator

Clone the repository:

```sh
$ git clone git@github.com:definiti/definiti-form-validation.git
```

Go into the project and launch sbt:

```
$ cd definiti-form-validation
$ sbt run
```