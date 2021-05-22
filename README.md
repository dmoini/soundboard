# Soundboard

A personal soundboard that can be found [here](https://dmoini.github.io/soundboard/).

## How to add a new sound

1. Find a sound and associated image that you like to add.
2. Add the sound file to `src/sounds`. The file must be a mp3 or m4a. Please format the sound file name as `road-work-ahead.mp3`.
3. Export the new sound file in the `src/sounds/index.js`. If we use the example file name from step 2, the export statement would look like this:

   ```javascript
   export { default as RoadWorkAhead } from "./road-work-ahead.mp3";
   ```

   If you would like to assign your sound a category, you can do so by appending the category key to the sound export. Using the previous example, if you wanted to add the sound to the "Friends" category, you would do the following:

   ```javascript
   export { default as RoadWorkAhead_FRIENDS } from "./road-work-ahead.mp3";
   ```

   All category options can be found in `src/common/constants.js` as `categories`. You are more than welcome to add new categories. The "Any" category is the default for viewing all sounds. Sounds with either no category or an unknown category are assigned to the "Other" category.

   Due to the `export` statement not allowing for special characters, you are not able to add special characters to your sound name (hyphens for example). To work around this, in `src/common/buttons.js` you can add to the switch case found in `getName()`. Use the "EnemyAC130Above" case as an example.

4. Add the image file to `src/images`. The file must be a valid image file (png, jpg, jpeg, etc...). Please format the image file name as `road-work-ahead.png`.

5. Export the new image file in the `src/images/index.js`. If we use the example file name from step 4, the export statement would look like this:

   ```javascript
   export { default as RoadWorkAhead } from "./road-work-ahead.png";
   ```

   **NOTE**: Make sure your sound and image import have the same name (not including the optionally appended category key). In the examples provided, both the sound and image export must be `RoadWorkAhead`. If they are not the same, your sound button may not play the correct sound when clicked on.

6. To verify that you have successfully added a new sound, please run this project locally. You can do so by running the following commands

   ```bash
   git clone https://github.com/dmoini/soundboard.git
   cd soundboard
   yarn
   yarn start
   ```

   Open up `http://localhost:3000/soundboard` in your internet browser to load up the soundboard locally. You should see your new sound. Click on it to verify that the sound plays correctly.

7. Once you have verified that everything works correctly, create a pull request.
