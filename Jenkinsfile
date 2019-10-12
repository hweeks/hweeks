pipeline {
  agent {
    node {
      label 'default'
    }

  }
  stages {
    stage('lint') {
      steps {
        sh '''yarn
yarn lint'''
      }
    }
  }
}