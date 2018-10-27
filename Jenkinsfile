pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        bat 'npm update'
        try {
          bat 'node node_modules/karma/bin/karma start'
        }finally{
          junit 'TESTS*.xml'
        }        
      }
    }
    /*stage('Verificacion') {
      steps {
        junit 'TESTS*.xml'
      }
    }*/
  }
}
