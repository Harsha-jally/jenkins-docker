pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Harsha-jally/jenkins-docker.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running Tests..'
            }
        }
    }
}