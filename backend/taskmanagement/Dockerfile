# Etapa 1: compilación
FROM maven:3.9.5-eclipse-temurin-17 as builder
WORKDIR /app

# Copiamos los archivos pom.xml y los sources
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Etapa 2: imagen final
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY --from=builder /app/target/taskmanagement-0.0.1-SNAPSHOT.jar app.jar

# Puerto de Spring Boot
EXPOSE 8085

ENV SPRING_PROFILES_ACTIVE=prod

ENTRYPOINT ["java","-jar","app.jar"]
