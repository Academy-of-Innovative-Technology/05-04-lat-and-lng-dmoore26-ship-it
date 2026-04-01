# 🗺️ Mapbox: FlyTo

## 📌 Objective
Recreate the demo and implement map navigation using longitude and latitude inputs.

## 🔗 Demo Reference
https://output.jsbin.com/vijuzim



## 📝 Instructions

### 1. Capture Input Values
- Retrieve the values from:
  - Longitude input box
  - Latitude input box

---

### 2. Add Conditional Logic
- Inside your conditional statement:
  - Ensure the inputs are valid before proceeding

---

### 3. Create Mapbox Coordinates Object
- Create a new `Mapbox LngLat` object (refer to slide 3):


---

### 4. Update `map.flyTo()`
  - Pass the `coordinates` variable as the value for the `center` key
  - Set the zoom level to **15**


---

### 5. Test Your Code
- Use the coordinates provided on **slide 5**
- Confirm that:
  - The map moves to the correct location
  - The zoom level updates properly

---

## ✅ Expected Outcome
- The map should smoothly move (`flyTo`) to the entered coordinates
- The zoom level should be set to **15**
- Inputs should dynamically control the map location