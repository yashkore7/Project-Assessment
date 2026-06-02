pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-node-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop devops-node-app || true'
                sh 'docker rm devops-node-app || true'
                sh '''
                docker run -d \
                  --name devops-node-app \
                  -p 3000:3000 \
                  devops-node-app:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
        failure {
            echo 'Deployment Failed'
        }
    }
}
