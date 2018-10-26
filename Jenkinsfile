pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        bat 'npm update'
        bat 'node node_modules/karma/bin/karma start'
      }
    }
  }
}