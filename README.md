# 📱 Mobile Squad: React Native Development

Welcome to the team! This repository is our primary workspace and documentation hub as we expand our mobile capabilities. We are utilizing **React Native** with the **Expo** ecosystem to build high-performance, cross-platform applications.

## 🛠 The Technical Stack

To ensure consistency and maintainable code, we are standardizing on the following toolkit:

* **Framework:** [Expo](https://expo.dev/) (Managed Workflow)
* **Language:** TypeScript (Strict Mode)
* **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for Native)
* **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **State Management:** [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (Lightweight Store)
* **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) (Server state & caching)

---

## 🚀 Getting Started

### 1. Environment Setup

1. **Node.js:** Ensure you have the latest LTS version installed.
2. **Mobile Device:** Download the **Expo Go** app from the App Store or Google Play.
3. **Project Initialization:** Run the following command to set up the workspace:
```bash
npx create-expo-app@latest --template tabs

```



### 2. Workflow Commands

* `npx expo start` — Starts the development server.
* **QR Code:** Scan the terminal QR code with your phone camera (iOS) or Expo Go app (Android).
* `r` — Press in terminal to reload the app.
* `d` — Press in terminal to open the Developer Menu.

---

## 📚 1-Week Knowledge Path

| Day | Focus Topic | Key Resource |
| --- | --- | --- |
| **Day 1** | **Core Components** | [Core Components & Native Components](https://reactnative.dev/docs/intro-react-native-components) |
| **Day 2** | **Layout & Flexbox** | [Layout with Flexbox](https://reactnative.dev/docs/flexbox) |
| **Day 3** | **Hooks & Logic** | [React Hooks (useState, useEffect)](https://react.dev/reference/react) |
| **Day 4** | **Navigation** | [Expo Router Documentation](https://docs.expo.dev/router/introduction/) |
| **Day 5** | **Lists & Networking** | [FlatList](https://reactnative.dev/docs/flatlist) & [Networking](https://reactnative.dev/docs/network) |

---

## 🛠 Project Standards

* **Component Structure:** Use Functional Components with Arrow Functions.
* **File Naming:** Use PascalCase for components (e.g., `ProfileCard.tsx`) and camelCase for utilities.
* **Styling:** Favor NativeWind utility classes for UI consistency.
* **Performance:** Always use `<FlatList>` or `<SectionList>` for rendering data collections to ensure efficient memory usage.

---

## 🚩 Coordination

If you encounter blockers—especially environment-specific issues (iOS vs. Android behavior)—please raise them in the group chat immediately. We will document common "Gotchas" in the `/docs` folder of this repo.
