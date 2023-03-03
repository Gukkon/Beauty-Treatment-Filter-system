# Beauty Treatment Filter System

---

Here is filter system to allow users to choose what treatment they would like to have within a certain beauty salon. The user will land on the page and choose from the following tabs (All, Massage, Facials, Manicures/Pedicures, Waxing) and the page will alter to only show the selected treatment. The treatments left on view allow the user to see what types of treatments under that heading there are, along with description, price and a book now link to show the user has booked the treatment.

# User Experience

** Please note that only the buttons on the top that links to the selected treatments work. The "Book Now" buttons do not link to any other page. **

As mentioned above, the idea is to filter through the list of treatments the salon has to offer. Instead of scrolling through the full list, the user can click on one of the buttons at the top of the page and select the treatment they would like to see. This then breaks up the full list and only shows what the user wants to see. This allows a quicker and friendly user experience for the user to then select the right type of treatment without continuously scrolling wasting their time and maybe steering them away from the site altogether.

# Design

### Colour Scheme

Colour is a basic white for the background to make any content "pop" and become more visible to the user making it easy to read. All typography is black as it is a good contrast to the white to again allow the user to see the content more easily. Buttons are a dark brown and follow on from any content to allow a good flow when the user reads the page.

### Typography

I have used the basic Arial font for my typography to keep it plain and simple. Helvetica and Sans-serif was also used as a back up. Sans-Serif however is used for my headers and made bold to allow them to stand out for easy eye catching for the user.

### Images

All images are taken from PNG-EGG and have been placed in the treatment divs to allow the user to see what treatment is on offer. The images are the same per treatment however but if this was for an actually salon then all images would be different and will show exactly what the selected treatment will entail.

# Features

- The page itself is using a flexbox layout and is fully responsive to different resolutions making accessibility easy for the user.

- The website consists of a bright white background colour with a header section containing the title of the page which is telling the user what the page will consist of and this is a H1 tag.

- Under the heading there are 5 buttons that display the treatment types for the user to select. They can choose to see all treatments on the page, or a specific one from massage, facials, manicures/pedicures or waxing. Once selected the page will only show them selected divs making the others "hidden" out of view.

![](/images/milestone2topbuttons.png)

- There is a horizontal rule under the buttons just to separate them and the heading from the main container that holds all the treatments for easy viewing.

- Each treatment is in its own div and contains the image of the treatment along with a short description, price and a book now button to allow the user to click on and book the treatment with the salon.

![](/images/milestone2treatmentdiv.png) _Lorem ipsum used for testing purposes_

# Future plans

The page is pretty basic for the time being. Working on Javascript for the first time has been difficult so for experience coders out there this wont look like much. However with more time and knowledge I would like to add another filter option where the user can input there own data by typing out a specific keyword that will filter the search more closely, such as a certain price range, a type of product used or even if the treatment can be done on pregnant women. This will just offer more choices for the user and narrow the search down more.

I also wanted to implement an add to cart section, so that the user can select multiple treatments and will then be added to a cart that will hold the selected treatments and tot up a running total for the user to then accept and allow the selected treatments to be paid for and booked. However my knowledge of Js isn't there yet to succeed in making this.

Also I would add the correct images that correspond to the treatment selected instead of using one generic image to represent them all, plus sort out the content inside each div so that all buttons and paragraphs link up nicely instead of all over the place.

---

# Languages

All 3 front-end languages were used on this project. HTML for content of the page, CSS to style and create the layout for the user to easily access all data, and Javascript to allow interactivity for the user to work with when selecting the desired treatment they require.

## Frameworks, Libraries, Programs & other Websites

- Github - To save and store my site
- VsCode was the text editor used
- Firefox Dev Tools - To monitor and fix any problems I might have
- Google Fonts - Using a range of fonts
- Code Institute - For knowledge of the languages used
- Vimeo for the video I created on the home page
- You Tube - Traversy Media and Mosh for Javascript lessons from their channel gain tips on knowledge on how to use it
- Javascript & Jquery book by Jon Duckett to have more help on the language side of things plus other tips and tricks
- Codecademy - to again gain more knowledge on the fundamentals of Javascript
- codepen - This was used a lot to help determine how the JS functions worked and if they were working properly with no errors
  -JShint - To test my Javascript code

---

# Testing

## Automated

Plenty of testing was carried out whilst designing the website and this was done quite a bit on firefox Dev Tools. The Dev Tools helped me when finding out where errors were located when it came to position my treatment divs and positioning my text and content inside the divs.

I used w3c validator to go through my page testing the HTML and CSS that I used to make sure that all was correct with no errors. Regarding the error on the HTML side,the button worked fine whilst using Javascript and with CSS styles already implemented and me running out of time I decided to leave it as the "type" attribute.

## Home Page w3c Validator

![](/images/milestone2htmltest.png) HTML testing
![](/images/milestone2csstest.png) CSS testing

## JS Hint

This was used to test my Javascript code and the report returned no errors. Now I did used this after I found out my code worked and I can tell you now that I did have so many errors at the start of this project that wasn't even worth testing as it was that wrong it would have been a waste of time.

As the code became more clearer to read and understood, more testing was done through codepen using console log to see if the functions were responding to user button clicks and selections looping through correctly.

![](/images/jshint.png) Javascript Testing

## Manual Testing

Manual testing was done by me basically clicking on each filter button and making sure the correct treatment div was highlighted. This then gave me the confidence that I knew all functions were working correctly.

### Massage Only

![](/images/milestone2massageonly.png)

### Facials Only

![](/images/milestone2facialsonly.png)

### Manicure/Pedicures Only

![](/images/milestone2manpedonly.png)

### Waxing Only

![](/images/milestone2waxingonly.png)

Layout testing was done to see how the page looked at different screen resolutions. This was done by me minimizing the viewport window and seeing if all content was visible and easy to read, still allowing the user to select the treatment they wish. As flexbox was used to style my page via CSS , this really helped with this and allowed my divs and top buttons to stack and wrap nicely allowing easy access for users to do what they need to do.

### Main Desktop View

![](/images/milestone2mainpagefullscreen.png)

### Tablet View

![](/images/tabletviewmainpage.png)

### Mobile View

![](/images/milestone2mobileview.png)

As the page is pretty much that basic, they were the only manual testing I had to do. All passed and worked fine.

---

# Credits

## Code Used

You Tubers Traversay and Mosh had tutorials on Javascript to help me learn the fundamentals and actually put together a working if statement and for loop to allow my filter system to work.

## Acknowledgments

Just a thank you here to everybody on my course (Rossanne, Skye, Rach and Tom) for helping me with little pointers every now and again on slack on where I can improve my site or with anything I was struggling with. The same goes to my tutor Rob who has been helpful throughout this milestone via email and on Thursday night lessons with all the gang.
