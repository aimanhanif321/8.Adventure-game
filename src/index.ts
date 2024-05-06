#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
//assingn energy of participante
let energy: number = 10;

console.log(
  chalk.yellowBright(
    `===============================================================`
  )
);

console.log(chalk.bgWhite.blackBright.bold(`\n\tHP : ${energy}\n`));

console.log(
  chalk.yellowBright(
    `===============================================================`
  )
);

// this is the main function

const question1 = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
]);

console.log(
  chalk.yellowBright(
    `===============================================================`
  )
);

console.log(
  chalk.bold.bgBlueBright.white(
    `\n-------- Hello, ${question1.name} Lets start the game-----------\n`
  )
);

console.log(
  chalk.yellowBright(
    `===============================================================`
  )
);

// if you want to exit
async function exitGame() {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );

  console.log(chalk.cyan.bold(`\n--Give up!---\n`));

  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
}

// this is the conformation function you want to ontinue or not
async function continueOrexit() {
  let goback = await inquirer.prompt([
    {
      name: "Continue",
      type: "confirm",
      message: chalk.bgWhite.blackBright.bold("you want to continue?"),
    },
  ]);
  if (goback.Continue === true) {
    await handelGateSituation();
  } else {
    await exitGame();
  }
}
// chooose your weapon
const question2 = await inquirer.prompt([
  {
    type: "list",
    name: "weapon",
    message: chalk.bgWhite.bold.black("======Select a Weapon=========\n"),
    choices: ["1.knife", "2.sword", "3.gun", "4.Axe", "5.Grenades"],
  },
]);
if (question2.weapon === "1.knife") {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.black.bold(`\n--You Select a Knife--\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
} else if (question2.weapon === "2.sword") {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.black.bold(`\n--You Select a Sword--\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
} else if (question2.weapon === "3.gun") {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.black.bold(`\n--You Select a Gun---\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
} else if (question2.weapon === "4.Axe") {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.bold.black(`\n--You Select a Axe--\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
} else if (question2.weapon === "5.Grenades") {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.black.bold(`\n--You Select a Grenades--\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
} else {
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
  console.log(chalk.bgWhite.black.bold(`\n--You Select nothing--\n`));
  console.log(
    chalk.yellowBright(
      `===============================================================`
    )
  );
}
handelGateSituation();
//start fight or not
async function encounter() {
  const chooseWest = await inquirer.prompt([
    {
      name: "goblin",
      type: "list",
      message: chalk.bgWhite.black.bold("You encounter a goblin!"),
      choices: ["Run", "Fight"],
    },
  ]);
  if (chooseWest.goblin === "Run") {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(chalk.bgWhite.black.bold(`you run away from the goblin`));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    await handelGateSituation();
  } else if (chooseWest.goblin === "Fight") {
    await fighting();
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    await fightAgain();
  }
}

// you want to attack or not
async function fighting() {
  const chooseWest = await inquirer.prompt([
    {
      name: "stop",
      type: "list",
      message: chalk.bgWhite.black.bold(
        "Monster HP is 20\n what to want to do"
      ),
      choices: ["Run", "Attack"],
    },
  ]);

  if (chooseWest === "Run") {
    await handelGateSituation();
  } else if (chooseWest.stop === "Attack") {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.black.bold(`You Attack the Monster and gave 10 damage`)
    );
    console.log(chalk.bgWhite.bold.black(`Monster HP:10 `));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.black.bold(`Monster Attack you and gave 2 damage`)
    );
    console.log(chalk.bgWhite.bold.black(`your HP:${(energy -= 2)}`));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
  }
}

async function handelGateSituation() {
  //this is the three sitations in this game
  const question3 = await inquirer.prompt([
    {
      name: "situation",
      type: "list",
      message: chalk.bgWhite.black.bold(
        "\nYou are at the gate of the town the guard is standing front of you \n What do you do?\n"
      ),
      choices: [
        "1.talk to the guard",
        "2.Attack to the guard",
        "3.Leave",
      ],
    },
  ]);

  if (question3.situation === "1.talk to the guard") {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.black.bold(
        `\nHello There, \n\tStranger So your name is ${question1.name} \n Sorry but we cannot let strangers to enter our town`
      )
    );
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    await continueOrexit();
  } else if (question3.situation === "2.Attack to the guard") {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.black.bold(
        `Guard : Hey Don't be stupid...\n The Guard hit you so hard.`
      )
    );
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(chalk.bgWhite.black.bold(`you gave up !`));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.black.bold(
        ` you recevie 3 damage Now your HP is: ${(energy -= 3)} `
      )
    );
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    await continueOrexit();
  } else if (question3.situation === "3.Leave") {
    // Handle leaving the gate situation
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(chalk.bgWhite.bold.black("You decide to leave."));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    let question4 = await inquirer.prompt([
      {
        name: "leave",
        type: "list",
        message: chalk.bgWhite.blackBright.bold(
          "you are at the cross road\nif you choose south you reached the gate of the town."
        ),
        choices: [
          "Go south",
          "Go north",
          "Go east",
          "Go west",
        ],
      },
    ]);
    if (question4.leave === "Go south") {
      await handelGateSituation();
    } else if (question4.leave === "Go north") {
      console.log(
        chalk.yellowBright(
          `===============================================================`
        )
      );
      console.log(
        chalk.bgWhite.blackBright.bold(
          `There is a river\nYou drink the water and rest the rive side`
        )
      );
      console.log(
        chalk.bgWhite.blackBright.bold(
          `(Your HP is recover by 2 now your HP is: ${(energy += 2)})`
        )
      );
      console.log(
        chalk.yellowBright(
          `===============================================================`
        )
      );
      await handelGateSituation();
    } else if (question4.leave === "Go east") {
      console.log(
        chalk.yellowBright(
          `===============================================================`
        )
      );
      console.log(chalk.bgWhite.bold.black(`you found a Long Sword`));
      console.log(
        chalk.yellowBright(
          `===============================================================`
        )
      );
      console.log(chalk.bgWhite.bold.black(`(Now your weapon is:Long sword)`));
      console.log(
        chalk.yellowBright(
          `===============================================================`
        )
      );
      await handelGateSituation();
    } else if (question4.leave === "Go west") {
      await encounter();
    }
  }
}
async function fightAgain() {
  const againFight = await inquirer.prompt([
    {
      name: "again",
      type: "confirm",
      message: chalk.bgWhite.blackBright.bold("you want to continue fight?"),
    },
  ]);
  if (againFight.again === true) {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    await fighting();
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.blackBright.bold(
        `You deafeat the monster !\n monster dropped the Ring`
      )
    );
    console.log(chalk.bgWhite.blackBright.bold(`now you have a SILVER RING`));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    winner();
  } else {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(chalk.bgWhite.bold.black(`give up!`));
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
  }
}

async function winner() {
  let enterinTown = await inquirer.prompt([
    {
      name: "winner",
      type: "confirm",
      message: chalk.bgWhite.bold.black("talk to the guard again"),
    },
  ]);

  if (enterinTown.winner === true) {
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
    console.log(
      chalk.bgWhite.bold.black(
        `guard Realized you have a silver ! \n oh you defeat the gobblin now you Enter in town`
      )
    );
    console.log(
      chalk.yellowBright(
        `===============================================================`
      )
    );
  } else {
    console.log(chalk.bgBlueBright.greenBright("you win the game"));
  }
}
