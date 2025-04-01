let mm, r, g, b, spacing, nin, nin2, nin3;
let threeQuarterShade, halfShade, quarterShade, quarterTint, halfTint, threeQuarterTint, complement, compTint, compShade;

let lines = [
  { text: "4/1__Shapes__4/3__Colors__", color: null },
  { text: "4/8__Variables__4/10__Conditions__", color: null },
  { text: "4/15__Loops__4/17__Oscillators__", color: null },
  { text: "4/22__Functions__4/24__Arrays__", color: null },
  { text: "4/29__Objects__5/1__Constructors__", color: null },
  { text: "5/6__Images__5/8__Outputs__", color: null },
  { text: "5/13__Sounds__5/15__Typographies__", color: null },
  { text: "5/20__Ideations__5/22__Iterations__", color: null },
  { text: "5/27__Reviews__5/29__Refinements__", color: null },
  { text: "6/5__Presentations__", color: null }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  nin = 0;
  nin2 = 0;
  nin3 = 0;
  noCursor();
}

function draw() {
  // Base color
  nin = nin + 0.00099;
  nin2 = nin2 + 0.0008;
  nin3 = nin3 + 0.0031;
  r = map(noise(nin), 0, 1, 100, 250);
  g = map(noise(nin2), 0, 1, 100, 250);
  b = map(noise(nin3), 0, 1, 100, 250);

  // Initialize spacing based on screen height
  spacing = windowHeight / 12;

  // Define colors with clamped values to avoid exceeding 255
  mm = color(r, g, b);
  background(mm);
  threeQuarterShade = color(r * 0.35, g * 0.35, b * 0.35);
  halfShade = color(r * 0.5, g * 0.5, b * 0.5);
  quarterShade = color(r * 0.75, g * 0.75, b * 0.75);
  quarterTint = color(min(r * 1.25, 255), min(g * 1.25, 255), min(b * 1.25, 255));
  halfTint = color(min(r * 1.5, 255), min(g * 1.5, 255), min(b * 1.5, 255));
  threeQuarterTint = color(min(r * 1.75, 255), min(g * 1.75, 255), min(b * 1.75, 255));
  complement = color(255 - r, 255 - g, 255 - b);
  compTint = color(
    min((255 - r) * 0.5, 255),
    min((255 - g) * 0.5, 255),
    min((255 - b) * 0.5, 255)
  );
  compShade = color(
    min((255 - r) * 1.5, 255),
    min((255 - g) * 1.5, 255),
    min((255 - b) * 1.5, 255)
  );

  // Assign colors to each text line
  lines[0].color = threeQuarterShade;
  lines[1].color = halfShade;
  lines[2].color = quarterShade;
  lines[3].color = quarterTint;
  lines[4].color = halfTint;
  lines[5].color = threeQuarterTint;
  lines[6].color = halfTint;
  lines[7].color = quarterTint;
  lines[8].color = quarterShade;
  lines[9].color = halfShade;

  // Headline text
  let headline = "__Lecture Topics__";
  let fontSize = spacing + 10; // Start with larger font size for the headline

  textSize(fontSize);
  while (textWidth(headline) > windowWidth) {
    fontSize--; // Reduce font size if text exceeds window width
    textSize(fontSize);
  }

  fill(0);
  textAlign(LEFT); // Ensure headline is left-aligned
  text(headline, 0, spacing); // Draw headline

  // Draw text with hover effect
  drawTextWithHover();
}

function drawTextWithHover() {
  for (let i = 0; i < lines.length; i++) {
    let y = spacing * (i + 2); // Calculate vertical position of each line
    let line = lines[i];

    // Adjust text size dynamically to ensure it fits within the screen width
    let fontSize = spacing - 15; // Base font size
    textSize(fontSize);
    while (textWidth(line.text) > width * 0.9) {
      fontSize--; // Reduce font size if text exceeds 90% of window width
      textSize(fontSize);
    }

    fill(line.color); // Use assigned color for each line

    // Check if the mouse is hovering over this line
    if (mouseX >= 0 && mouseX <= windowWidth && mouseY > y - spacing / 2 && mouseY < y + spacing / 2) {
      textAlign(RIGHT); // Align text to the right if hovered
      text(line.text, width - 10, y); // Draw right-aligned text
    } else {
      textAlign(LEFT); // Default to left-aligned text
      text(line.text, 10, y); // Draw left-aligned text
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize the canvas to fit the new window dimensions
  spacing = windowHeight / 13; // Recalculate spacing to maintain layout
}


