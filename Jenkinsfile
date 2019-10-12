
pipeline {
  // agent {
  //   docker {
  //     image 'node:12'
  //   }
  // }
  environment {
    DOCKER_USER = credentials('docker_user')
    DOCKER_PASS = credentials('docker_pass')
    BUILD_TAG = sh (
        script: 'git log -1 --format=%h',
        returnStdout: true
    ).trim()
  }
  stages {
    stage('lint') {
      steps {
        sh """
        yarn
        yarn lint
        yarn test
        """
      }
    }
    stage('build') {
      steps {
        script {
          def builder = docker.build "hams/hweeks"
        }
      }
    }
    stage('tag and push') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', 'docker_user_pass') {
            builder.push("${env.BUILD_TAG}")
            builder.push("latest")
          }
        }
      }
    }
    stage('Example') {
    steps {
      script {
        if (env.BRANCH_NAME != 'master') {
            echo 'This is not master'
          } else {
            echo 'things and stuff'
          }
        }
      }
    }
  }
}
