FROM maven:3.6.3-jdk-11-slim AS build
RUN mkdir -p /workspace
WORKDIR /workspace
COPY pom.xml /workspace
COPY settings.xml /workspace
COPY src /workspace/src
RUN mvn clean install
RUN mvn -B -f pom.xml clean package -DskipTests

FROM tomcat:latest
COPY --from=build /workspace/target/*.war /usr/local/tomcat/webapps/
