pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        bat 'npm update'
        step ('Ejecutando los Test') {
          try {
            bat 'node node_modules/karma/bin/karma start'
          }catch(err) {
            echo 'Los test han fallado'
          }        
        }
      }
    }
    stage('Verificacion') {
      steps {
        echo 'Se interpretan los resultados de los test'
        junit 'TESTS*.xml'
      }
    }
  }
}
