pipeline{
    agent any 
    
    environment {
      def uploadSpec = """{
          "files": [
            { 
                "pattern": "${env.WORKSPACE}/TestWebAppandPipeline/*",
                "target": "default-generic-local/"
            }
          ]
      }"""
      
      def buildVersion = "TestWebAppandPipeline_v1.0.${env.BUILD_NUMBER}"
      def artifactFile = "${buildVersion}.zip"
  }
  
  stages {
    /*stage('Git Pull') {
          
      steps {
        //Cleanup before starting the stage
        deleteDir() / cleanWs() or your own way of cleaning up
                
        //Checkout the repository
        checkout scm 

      
        //to be deleted: manual way to git pull
        //echo 'Pulling source code from git...'
        //git(url: 'https://aniwff@bitbucket.org/ptgdi/testwebappandpipeline.git', credentialsId: 'Bitbucket', branch: 'master')
      }
        
    }*/
      
    stage('Build') {
        steps {
            echo 'Building code using msbuild...'
            bat "\"${tool 'MSBuild'}\\msbuild\" TestWebAppandPipeline.sln /t:restore /p:RestorePackagesConfig=true"
            bat "\"${tool 'MSBuild'}\\msbuild\" TestWebAppandPipeline.sln /p:Configuration=Release /p:Platform=\"Any CPU\" /p:ProductVersion=1.0.0.${env.BUILD_NUMBER}"
        }
    }
    
    stage ('Deploy') {
        steps {
            echo 'Packaging artifacts...'
            script {
                zip zipFile: artifactFile, dir: 'TestWebAppandPipeline', overwrite: 'true'
            }
            
            echo 'Deploying to AWS S3...'
            bat "aws s3 cp " + artifactFile + " s3://test-ani-bucket/"
        
            /*echo 'Deploying to Artifactory...'
            script {
                def server = Artifactory.server 'JFrog_gdi'
                server.bypassProxy = true
                server.upload(uploadSpec)
            }*/
            //bat """curl -H "X-JFrog-Art-Api:AKCp8mYoWniJMXvkJAgwLQVPgdrsS96KEu23YRDYqeqFhJE8j5dtGL3uigtdcYESvzFkRWcu9" -T "${env.WORKSPACE}/MyWebApplication/MyWebApplication.csproj" "https://ptgdi.jfrog.io/artifactory/default-maven-local/MyWebApplication.csproj" """
        }
    }

  }
  
  
}
