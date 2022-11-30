
/* selectors */
/* combinators */
/* descendant selectors */
/* div p - all p tags regardless of nesting 
no matter how deeply they are nested  */

/* Child selectors - direct and immediate children*/
div > p {
	background-color: rgb(42, 165, 65);
}

/* adjacent siblings - immediately following 
and selects only one first one if more after immediately following
sibling that are right next to each pther*/

/* general siblings - not just adjacent but selects all siblings */

/* pseudo selector */
/* give states */
/* hover, active, visited, link */
/* a:hover or classname:hover or any selectorname:hover */

/* selecting elements using */

/* pseudo classes with combinators */
/* nth child - pseudo class */
ul > li:nth-child(odd) {
	color: black;
}
/* n + 3 - everything after 3 including 3rd one */
ul > li:nth-child(n + 3) {
	color: black;
}
/* every third one child */
/* every multiple of three */
ul > li:nth-child(3n) {
	color: black;
}
/* only the second child */
ul > li:nth-child(2) {
	color: black;
}

/* relative units vs fixed units */

/* fixed - px - amount of dots on a screen*/
/* percentage - relative to parent element
relative to outer container
for example
outer box - 50%
inner box - 50% ratio relative to parent
vs 
outer box - 50px
inner box - 50px */

/* viewheight and viewwidth - vw
percentage of viewport */

/* em - relative to font size of element 
relative to element size and changes based on units defined*/
/* rem  - based on the body font size
relatibe to root element either * ashterick or document body*/


<p>Paragraph 1</p>
			<p>Paragraph 1</p>
			<section>
				<p>Paragraph 3 enclosed</p>
			</section>