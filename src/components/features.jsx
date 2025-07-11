
export function Features(){
    return (
        <div>
            <h1>show only good clips 5 to 10 sec like that and show it in video clip even it is not seleted to view</h1>
            <h1 id="first">1 search for ... after search the location by its name it will appaires hear with image and loacation details, also try to give budget , also give how to reach that place from yours place</h1>
            <h1>2 also after viewing that place we can give rating review also it will show tick mark </h1>
            <h1 style={{color:'green'}}>3 also we can add our own places based on latitude and longtitude if u want this view to other we need to pay also we can fallow his account unfallow all those stuff aslo we can see account owners fav places too</h1>
            <h1  >4 ************** add ur own viewed location and we will show it to other for paying certain amount</h1>
            <button>add</button>
            <h1>5 my fav locations</h1>
            <h1>6 categorys like beach, islands, road, waterfall, desert, temples, musilam temples</h1>
            <h1>7 based on category search it will show that place</h1>

            <div id="section1">
                <h1>it is section 1</h1>
                <button className="btn btn-primary"
                        onClick="display('section2')"
                > go to section 2</button>
            </div>

            <div id="section2">
            <h1>it is section 2</h1>
                <button className="btn btn-primary"
                        onClick="display('section3)"
                > go to section 3</button>
            </div>
            
            <div id="section3">
            <h1>it is section 3</h1>
                <button className="btn btn-primary"
                        onClick="display('section1')"
                > go to section 1</button>
            </div>
            <a href="#first"> goto first</a>
            
        </div>
    )
}