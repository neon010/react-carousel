# react-simple-minimal-carousel.

A lightweight and fully customizable carousel component for React

### Installing as a package

```
npm install react-simple-minimal-carousel
```

```
yarn add react-simple-minimal-carousel
```

### Usage

```jsx
import './App.css';
//@ts-ignore
import Carousel from "react-simple-minimal-carousel"

function App() {
  return (
    <div className="App">
      <Carousel 
      images={
        [
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
          'https://images.unsplash.com/photo-1616776005756-4dca36124bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1611451444023-7fe9d86fe1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        ]}
      width={650}
      height={500}
      showDots={true}
      leftArrowLabel={"left"}
      rightArrowLabel={"right"}
      arrowStyle={{padding:"5px", background:"black", color:"#fff", border:'none'}}
      />
    </div>
  );
}

export default App;
```

### Props

| Name                                     | Value                        | Description                                                                                                                                                                                                           |
| ---------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ariaLabel                                | `string`                     | Define the `aria-label` attribute for the root carousel element. The default is `undefined`, skipping the attribute from markup.                                                                                      |
| axis                                     | `'horizontal'`, `'vertical'` | Define the direction of the slider, defaults to `'horizontal'`.                                                                                                                                                       |
| autoFocus                                | `boolean`                    | Force focus on the carousel when it renders.                 

