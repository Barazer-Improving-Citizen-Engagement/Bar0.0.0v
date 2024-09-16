FROM node:18-alpine as builder

# Install Expo CLI
RUN npm install -g expo-cli

RUN npm install

# Copy your project files
COPY . .



# Build the Expo project
RUN npx expo build:android --release --type apk --output path/to/output.apk

RUN npx expo build:web --release


# Set the command to run the APK
CMD ["emulator", "-avd", "pixel_4", "-no-snapshot-save", "-gpu", "swiftshader_offline"]


