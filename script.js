"use strict"

function showAuto() {
  document.getElementById("auto").innerHTML = "<h2>Automated <br>Investing</h2><p>Effortlessly acquire your preferred<br> token over time with a few clicks.<br> Simply choose a token pair, indicate<br> the desired swap rate, and then<br> leave the rest to us. Embrace the<br> convenience of growing your<br> portfolio as you watch your<br> investment accumulate, second by<br> second.</p>";
}
function showOrder() {
  document.getElementById("auto").innerHTML = "<h2> Large <br>Order </h2> <p>Effectively swap on the total<br> available liquidity in DeFi, regardless<br> of the TVL on Aqueduct. Arbitrageurs<br> are economically incentivized to<br> bring your price back to the market<br> rate, ensuring you get reduced<br> price-impact.</p>"
}
function showToken() {
  document.getElementById("auto").innerHTML = "<h2>Token <br>Divesting</h2> <p>Automate your token exits by selling<br> a small portion of your protocol<br> allocation over time on Aqueduct.<br> Remain transparent while refraining<br> from alerting the market to the total<br> amount you intend to sell.</p>"
}
function showLaunchpad() {
  document.getElementById("auto").innerHTML = "<h2>Launchpad</h2> <p>Immediately start gaining access to<br> funds when you launch a new token.<br> Slowly distribute new tokens to your<br> investment community while<br> immediately gaining access to<br> funding as you distribute. Launching<br> on a time-based AMM also helps to<br> mitigate the risk of rug pools.</P>"
}



function openNav() {
  document.getElementById("sideNav").innerHTML = `
 <div class="h">
 <a href="#" class="close" id="close" onclick="closeNav()">&#10006</a>
 <a href="https://aqueduct-finance.gitbook.io/">Docs</a> 
 <a href="https://github.com/aqueduct-finance">Code</a></li>
 <a href="mailto:blaine@aqueductfinance.com">Contact Us</a>
 </div>
  `
  document.getElementById("").style.width = "0%"
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0%"
}

