# Portfolio 3d

Technology stack I am going to use

- React
- Three.js
- Tailwind css
- Blender
- vite

## 1st: Initialization

Create react project template.<br>
    `npm create vite@latest ./ -- --template react`

To run the server, we can use the command,<br>
    `npm run dev`

Installing tailwindcss. <br>
    `npm install -D tailwindcss`
    <br>
    `npx tailwindcss init`

Installing required dependecncies. <br>
    *react tilt* uses older version of react. (The --legacy-peer-deps option is used when installing packages with npm. It allows npm to install packages that declare peer dependencies that do not match the version requirements specified in the package.json file of our project.)

Here's a short description of each package and why I am using them in my project:

1. `@react-three/fiber`: This is a library that allows you to use the Three.js library declaratively in a React component. You may be using this library to create 3D graphics or animations in your portfolio website.

2. `@react-three/drei`: This is a collection of useful helpers and abstractions for the `@react-three/fiber` library. It can help you to simplify your code when working with 3D graphics.

3. `maath`: This is a package that provides a set of mathematical utilities for working with Three.js. It can be useful when creating complex 3D models or animations.

4. `react-tilt`: This is a package that provides a simple and lightweight parallax hover effect for React components. You may be using this package to add some interactivity or visual interest to your website.

5. `react-vertical-timeline-component`: This is a package that provides a vertical timeline component for React. It can be used to display a timeline of your work or educational history on your portfolio website.

6. `@emailjs/browser`: This is a package that provides an easy way to send emails directly from the browser using email service providers like Gmail, Yahoo, or SendGrid. You may be using this package to allow visitors to your website to contact you directly.

7. `framer-motion`: This is a package that provides a simple and powerful way to add animations and gestures to React components. You may be using this package to add some motion and interactivity to your portfolio website.

8. `react-router-dom`: This is a package that provides a set of routing components for React. It can be used to create a multi-page portfolio website with different routes and pages.

`npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom`

`npm install --leagacy-peer-deps three`

## 2nd: Adding public, assests

## 3rd: Creating components

## 4th: Creating the layout
    import the needed components, and assests, stylesheets to APP.js
    1st: create the broswser router
    2nd: inside the browser router create the sub-sections

    setActive() recals where we are currently on the page

### Creating Navigation bar. 

focus on both larger and small devices.

### Creating the Hero section.

This section includes the 3d model.

#### Creating the react-three/fiber canvas

In this canvas we can place our 3d Model.
OrbitControls, Preload, useGLTF helps us to draw on the canvas.

When creating a 3D model we are using `mesh` instead of `div`.
We have to crate a light, otherwise we cannot sea it.

fov - stands for field of view
maxPolarAngle, minPolarAngle we can rotate on a specific angle only.

#### Creating scrolling button with framer motion

-------------------------------------------------------------
## Tailwind css

w-full : means take the full width
