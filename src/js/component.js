class Award extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="award-wrapper">
        <div class="award-card">
                <a target="_blank" href="https://girldevelopit.com/programs/hackathon-showcase/"><img class="card-image"
                    src="_imgs/thumbnails/contribution/gdi-hackathon.png" alt="GDI Hackathon 2nd Place Winner"></a>
                     <figcaption style="font-size: 12px;text-align:center!important;">GDI: 2nd Place Winner</figcaption>
            </div>
        <div class="award-card">
                <figure>
                <a target="_blank" href="https://news.samsung.com/us/samsung-innovation-campus-learner-spotlight-natia-lollie/?utm_source=linkedin&utm_medium=usnews&utm_campaign=general"> <img class="card-image" 
                    src="_imgs/thumbnails/contribution/samsung-badge.png" alt="Samsung Innovation Campus Featured Student"></a>
                <figcaption style="font-size: 12px;text-align:center!important;">Samsung: Featured Student</figcaption>
                </figure>
            </div>

        </div>
        `
    }
}

class Rights extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer-rights">
            <p><a target="_blank" href="https://github.com/natiaLollie"><b>github.com/</b>natiaLollie</a></p>
            <!--<p>Portfolio designed and developed by Natia Lollie | github.com/natiaLollie</p>-->
            <p class="mobile-resume" style="font-size: 12px; padding-top: 10px;"><a target="_blank" href="#"><em>Download Resume</em></a></p>
        </div>
        `
    }
}


customElements.define('award-icons', Award);
customElements.define('footer-rights', Rights);