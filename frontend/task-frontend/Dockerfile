# ===================================
# Etapa 1: Construcción de Angular
# ===================================
FROM node:18.20-alpine as builder

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos del proyecto
COPY . .

# Compilamos la aplicación Angular en modo producción
RUN npm run build

# ===================================
# Etapa 2: Servir con Apache
# ===================================
FROM httpd:2.4

# Activamos mod_rewrite y permitimos Override para usar .htaccess
RUN sed -i 's/^#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf \
    && sed -i 's/AllowOverride None/AllowOverride All/' /usr/local/apache2/conf/httpd.conf

# Copiamos los archivos compilados desde la etapa de construcción
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /app/dist/task-frontend/ .

# Creamos un archivo .htaccess para manejar rutas SPA (fallback a index.html)
RUN echo "<IfModule mod_rewrite.c>\n\
RewriteEngine On\n\
RewriteCond %{REQUEST_FILENAME} !-f\n\
RewriteCond %{REQUEST_FILENAME} !-d\n\
RewriteRule ^.*$ /index.html [L]\n\
</IfModule>" > .htaccess

# Exponemos el puerto 80
EXPOSE 80

# Ejecutamos Apache en modo foreground
CMD ["httpd-foreground"]
