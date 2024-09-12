FROM node:18-alpine as builder

# Install Expo CLI
RUN npm install -g expo-cli

# Copy your project files
COPY . .

# Install project dependencies
RUN npm install

# Build the Expo project
RUN expo build:android --release --type apk --output path/to/output.apk

RUN expo build:web --release

# Create a new stage for the final image
FROM android:11-x86_64 as final

# Copy the built APK from the builder stage
COPY --from=builder /path/to/output.apk /app/output.apk

# Set the command to run the APK
CMD ["emulator", "-avd", "pixel_4", "-no-snapshot-save", "-gpu", "swiftshader_offline"]


