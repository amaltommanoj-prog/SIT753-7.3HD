pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        IMAGE_NAME = "sit753-app"
    }

    stages {

        stage('Checkout') {
    steps {
        git branch: 'main', url: 'https://github.com/amaltommanoj-prog/SIT753-7.3HD.git'
    }
}

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'SonarQube analysis stage'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'OWASP Dependency Check stage'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker run -d -p 3000:3000 --name sit753-container %IMAGE_NAME%'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage completed'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring stage completed'
            }
        }
    }
}