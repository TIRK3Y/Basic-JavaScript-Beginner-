prompt
var guestList = ["Kamlesh", "friend1", "friend2"];
var guestName = prompt("what is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
}
else
{
    alert("Better luck Next Time!");
}