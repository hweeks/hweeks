
pipeline {
    agent {
        docker {
            image 'node:12'
        }
    }
    environment {
        DOCKER_USER = credentials('docker_user')
        DOCKER_PASS = credentials('docker_pass')
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
                sh """
                docker login -u $DOCKER_USER -p $DOCKER_PASS
                docker build -t hweeks-jenkins --build-arg GIT_COMMIT=\$(git log -1 --format=%h) .
                """
            }
        }
        stage('tag') {
            steps {
                sh """
                docker tag hweeks-jenkins hams/hweeks:\$(git log -1 --format=%h)
                docker tag hweeks-jenkins hams/hweeks:latest
                """
            }
        }
        stage('push') {
            steps {
                sh """
                docker push hams/hweeks:\$(git log -1 --format=%h)
                docker push hams/hweeks:latest
                """
            }
        }
    }
}
