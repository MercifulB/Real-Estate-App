# React Native Real Estate App

ReState is a full-stack Real Estate application built with React Native, Expo SDK 52, and TypeScript, featuring Google authentication, dynamic property listings, and customizable user profiles. Key features include a powerful home page with search and filters, an explore page for browsing properties, detailed property pages, and profile management. Designed with modern tools like Appwrite, Tailwind CSS, and Nativewind, the app prioritizes scalability, efficient data fetching, and clean architecture for an exceptional user experience.

✨ Features
🔑 Google Authentication: Secure and seamless user sign-ins using Google.
🏠 Home Page: Discover the latest and recommended properties with advanced search and filter functionality.
🔍 Explore Page: Browse properties in a clean, user-friendly interface.
📄 Property Details Page: View comprehensive property information, including images, features, and pricing.
👤 Profile Page: Customizable user settings and profile management.
⚡ Centralized Data Fetching: Inspired by TanStack’s useQuery, enabling efficient API calls.
📱 Optimized for Mobile: A responsive and performant app leveraging React Native and Expo.

🛠️ Tech Stack
| Tool/Framework   | Description                                   |
|-------------------|-----------------------------------------------|
| **React Native**  | Framework for building cross-platform apps.  |
| **Expo SDK 52**   | Development platform for React Native apps.  |
| **TypeScript**    | Statically typed JavaScript for scalability. |
| **Appwrite**      | Backend-as-a-service for authentication and database management. |
| **Tailwind CSS**  | Utility-first CSS framework for styling.     |
| **Nativewind**    | Tailwind CSS for React Native.               |



🏗️ How It Works
Authentication: Users can log in securely using Google authentication powered by Appwrite.
Dynamic Listings: Property listings are dynamically fetched and displayed, categorized by type and features.
Personalized Experience: User profiles store preferences and settings for a tailored experience.
Data Fetching: A custom-built centralized data fetching solution ensures smooth API communication.


📂 Folder Structure
Real-Estate-App/
├── components/         # Reusable components (Cards, Filters, etc.)
├── constants/          # Static data (Icons, Images, etc.)
├── lib/                # Custom hooks and API calls
├── screens/            # App screens (Home, Explore, Profile, etc.)
├── styles/             # Tailwind CSS configuration
├── App.tsx             # Entry point of the app
├── package.json        # Project dependencies



This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
