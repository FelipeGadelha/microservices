FROM openjdk:11

RUN adduser --system --group spring
USER spring:spring

ARG JAR_FILE=/ms-gateway/target/*.jar
COPY ${JAR_FILE} app.jar
CMD java -jar /app.jar