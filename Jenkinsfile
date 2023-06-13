@Library('global-shared-library') _
pipeline {
    agent any

    stages {
         stage('Check Out') {
            steps {
                checkOut(
                    branch: "master",
                    url: "https://github.com/he329178/gitopscalculator.git"
                )
            }
        }
        stage('Maven Version') {
            steps {
                mavenVersion()    
            }
        }
        stage('RunTest Cases') {
            steps {
                runTests()
            }
        }
        stage('Publich Test Reports') {
            steps {
                publishReports()
            }
        }
        stage('Build Code') {
            steps {
                buildCode()
                //sh 'mvn clean compile -P jacoco:report sonar:sonar war:war'
                //sh 'mvn package -DskipTests=true'
            }
        }
    }
}
