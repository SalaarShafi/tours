Check it out here: https://tours-salaarshafi.netlify.app/

This project loads data by first fetching it from an api then displaying it as a list of tours of which you can read a description, short or long.

An async function is defined which awaits the fetch response from a url and then awaits turning it into json and subsequently setting the loading state to false and setting the tours by use of a useState to the fetched response.A useEffect hook is used to initially trigger the async function.

The data is then transferred through prop drilling to other functions which map data and return components having the data integrated into them hence showing the data in a visual graphic form on the webpage.

You can also choose to view shorter or longer version of the descriptions by clicking on buttons read more and show less. These buttons using the onClick functionality are present in each component function which set the paragraph state to true or false. When true it shows the full description and when false it runs the substring function on the description and shows only a part of it. The program uses the ternary operator to decide whether to run the substring function and return a shorter description or the larger one.

The readMore state also defines what name the button has eg when false the button has the read more name and when true the button has the show less name.

The tours can also be removed as a function is passed through prop drilling to individual tour components which has the setState functionality of the tours data in it and it uses the filter higher order function to filter out the tour you are not interested in by matching the id in the tour component to the object in the data, filtering it and setting the tours state again without said tour.

When no tours are left a refresh button shows up which is conditionally rendered when the length of the tours state that provides the data array is 0. Clicking it will run the fetch function again which then sets the fetched data to tours state.
