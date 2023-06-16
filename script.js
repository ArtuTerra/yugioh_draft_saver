const fs = require("fs");

// creating filteredId object that
let csvContent =
  "cardname,cardq,cardrarity,cardcondition,card_edition,cardset,cardcode,cardid\n";
let ygkContent = "#main\n";

let filteredData = [];

// reading the input txt file created by the user using the object chaosdraftarray
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) throw err;
  const cardData = JSON.parse(data);

  cardData.forEach((element) => {
    let tempData = new Plr();
    tempData.id = element.id;
    tempData.name = element.name;
    tempData.set = element.set;
    tempData.edition = element.edition;
    tempData.rarity = element.rarity;
    tempData.setcode = element.setcode;
    filteredData.push(tempData);
  });

  filteredData.forEach((element) => {
    csvContent += `${element.name},1,${element.rarity},M,Unlimited,${element.set},${element.setcode},${element.id}\n`;
    console.log(element.name);
  });

  fs.writeFile("output.csv", csvContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("CSV File created successfully!");
  });
});

function Plr() {
  this.id = null;
  this.name = null;
  this.set = null;
  this.rarity = null;
  this.setcode = null;
}
