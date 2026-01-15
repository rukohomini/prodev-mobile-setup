
# First Mobile App Setup

## Objective

In this task, I created my very first mobile application using the **Expo Router template**. The goal was to get hands-on experience with React Native, understand the project structure, and learn how to scaffold, run, and reset a mobile app using Expo.

---

## My Project Setup

### Step 1: Navigate to Project Directory

I started by moving into my project folder:

```bash
cd prodev-mobile-setup
```

### Step 2: Initialize the Expo Project

To set up my project, I ran:

```bash
npx create-expo-app@latest .
```

This automatically created all the necessary folders and files for a React Native app. It was exciting to see the project scaffold in front of me—it made the whole idea of mobile development feel more real.

---

## Modifying the Home Screen

* I opened `app/(tabs)/index.tsx`
* Found the default text `Welcome!`
* Changed it to:

```tsx
<Text>First App Created</Text>
```

Seeing my text appear on the screen during the first test made me feel like I was officially stepping into mobile development.

---

## Running and Testing the App

* Started the Expo server with:

```bash
npx expo start
```

* **iOS:** Scanned the QR code using my iPhone camera.
* **Android:** Scanned the QR code using Expo Go.

The app launched successfully, displaying **First App Created**. Holding my phone and seeing my first app live was genuinely satisfying and motivating.

---

## Resetting the Project

To test project maintenance, I ran:

```bash
npm run reset-project
```

### My Observations:

* The command cleared cached build files, which helps avoid old errors.
* Resetting ensured a clean start without affecting my source code.
* It gave me confidence that I can safely experiment and reset when needed without breaking the project.

---

## File Structure Overview

Here’s what I found interesting about the file structure:

* `app/(tabs)/index.tsx` → Main screen where I made my first modification
* `app-example/` → Scaffolded project folder that holds all the app files
* `app-example/constants/Colors.tsx` → Centralized colors that make styling consistent

Seeing how the files are organized helped me understand how React Native projects are structured and where I can make changes safely.

---

## Reflection

This first app was more than just running a template—it gave me confidence in my ability to start mobile projects. I learned how to scaffold an app, modify components, run it on my device, and reset safely. These experiences make me feel ready for more complex mobile development tasks ahead.

---

## Repository Details

* **Repository:** prodev-mobile-setup
* **Directory:** mobile-development-app-0x00
* **Files:**

  * `README.md`
  * `app-example/app/(tabs)/index.tsx`
  * `app-example/constants/Colors.tsx`
  * `app-example/` (full scaffolded folder)

























































