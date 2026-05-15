const LEVEL3 = {
  "postGame": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "end",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "pancake-bowl",
        "x": "15",
        "y": "40",
        "size": "15",
        "flipX": true
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Thank you for helping Wendy and helping her feel better! The ocean is a lot more safe now thanks to you!",
        "type": "left"
      }
    ]
  },
  "pancakeIntro": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": undefined,
    "nextScene": "pancakeSanJuan",
    "baseFrame": [],
    "frames": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "47.6",
        "y": "-1",
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "15",
        "y": "40",
        "size": "15",
        "flipX": false
      }
    ],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hi again! We’re deeper in the ocean now! There are a whole lot of weird and mysterious creatures down here. This is generally where I hang out!",
        "type": "left",
        "keyword": "mysterious"
      }
    ]
  },
  "pancakeSanJuan": {
    "type": "comic",
    "background": "san-juan",
    "previousScene": "pancakeIntro",
    "nextScene": "pancakeAfterMap",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "5",
        "y": "80",
        "size": "010",
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "We've moved a little bit north to the San Juan Islands in Washington.",
        "type": "nospeaker"
      }
    ]
  },
  "pancakeAfterMap": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "pancakeSanJuan",
    "nextScene": "wendyIntro", // tutorial --> flapguide Wendy
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "15",
        "y": "40",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": 0,
        "size": 50,
        "flipX": false
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "The biggest creature down here is the Killer Whale. My friend Wendy is a Killer Whale. I wonder if you can find her?",
        "type": "left"
      }
    ]
  },
  "wendyIntro": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "pancakeAfterMap",
    "nextScene": {
      "I sure have learned a lot along the way. Is there any way I can help you?": "wendyAPath",
      "I'm curious, what is it like to be a whale?": "wendyBPath",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Hi! I’m Wendy the Whale. I’ve heard a lot about you from Pancake! It seems you’ve been on quite the adventure so far.  ",
        "type": "left"
      }
    ]
  },

  // A Path
  "wendyAPath": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "wendyIntro",
    "quizNextScene": "wendyAPathAfterQuiz",
    "nextScene": "quiz",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Yes, actually! Because I’m so big, it takes a lot of food to fuel me so that I can swim and have energy. Sometimes, it’s hard to find enough food!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I mostly eat fish, squid, seals, and sometimes even birds! Recently, I’ve been eating these random things floating around in the water to fill me up. ",
        "type": "left"
      }
    ]
  },
  "wendyAPathAfterQuiz": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": "wendyEnd",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Some of my other friends in our pod have been doing the same thing and I think it might be what has been making us all feel sick.",
        "type": "left",
        "keyword": "pod"
      },
      {
        "speaker": "",
        "message": "It’s really starting to weigh me down... And my stomach hurts!",
        "type": "left"
      }
    ]
  },
  "wendyBPath": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "wendyIntro",
    "quizNextScene": "WendyBPathAfterQuiz1",
    "nextScene": "quiz",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      }
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Fun fact, I’m technically not even a whale. Although some people call us Killer Whales, my formal name is an Orca, and I’m closely related to dolphins!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Similar to dolphins, us Orcas tend to swim in pods, so me and my friends get to explore the ocean together!",
        "type": "left",
        "keyword": "pods"
      },
      {
        "speaker": "",
        "message": "Unlike dolphins, I’m one of the biggest animals down here in the ocean. I weigh 7,000 pounds!",
        "type": "left"
      }
    ]
  },
  "WendyBPathAfterQuiz1": {
    "type": "comic",
    "background": "dark-blue",
    "quizNextScene": "WendyBPathAfterQuiz2",
    "nextScene": "quiz", 
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Since I’m so big, it takes a lot of food to fuel me so that I can swim and have energy. Sometimes it’s hard to find enough food!",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "I mostly eat fish, squid, seals, and sometimes even birds! Recently, I’ve been eating these random things floating around in the water to fill me up. ",
        "type": "left"
      }
    ]
  },
  "WendyBPathAfterQuiz2": {
    "type": "comic",
    "background": "dark-blue",
    "previousScene": "WendyBPathAfterQuiz1",
    "nextScene": "wendyEnd",
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "070",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "It’s really starting to weigh me down... And my stomach hurts!",
        "type": "left"
      }
    ]
  },
  "wendyEnd": {
    "type": "comic",
    "background": "dark-blue",
    "nextScene": {
      "Sure! I'm happy to help!": "minigame",
      "Ew no.": "end",
    },
    "baseFrame": [
      {
        "type": "sprite",
        "image": "wendy-whale",
        "x": "-30",
        "y": 0,
        "size": "70",
        "flipX": true
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Do you think you could help me? Maybe you can swim into my stomach and help to remove all the bad stuff that I ate!",
        "type": "left"
      }
    ]
  },

  // Entered whale
  "wendyEntered": {
    "type": "comic",
    "background": "whale-stomach",
    "nextScene": 'playWhale',
    "baseFrame": [
      {
        "type": "sprite",
        "image": "pancake-flapjack-octopus",
        "x": "15",
        "y": "40",
        "size": "15",
        "flipX": false
      },
      {
        "type": "sprite",
        "image": "user-placeholder",
        "x": "50",
        "y": -50,
        "size": 50,
        "flipX": false
      },
    ],
    "frames": [],
    "dialogue": [
      {
        "speaker": "",
        "message": "Woah! There's a lot of debris and nets in here that Wendy swallowed.",
        "type": "left"
      },
      {
        "speaker": "",
        "message": "Hopefully, you can use what you've learned along your journey to help get rid of all of the bad stuff!",
        "type": "left"
      },
    ]
  },
}

export default LEVEL3;