---
title: All Good Things
description: Dance as Anna, an aspiring ballerina, in this "body as alt control" webcam tracked game with realtime VFX.
image: agt-poster.PNG
tags: creative tech, games
collaboration: USC Games, various
roles: Designer, Touchdesigner Artist, Technical Producer, Writer, Creative Director
tools: Unity, Touchdesigner, Mediapipe, WWise, Jira, Github
play: https://wangbern.github.io/Scheherazade-Games/allgoodthings/
playlabel: website
hasLink: true
---

:::row
title: Whiplash meets Black Swan meets Just Dance
video: https://youtu.be/Rfpc91IXwlc?si=27mieBn-n1xX2EmX
side: right
bullet: MFA thesis. A 30-minute webcam ballet game that teaches choreography, then opens into freestyle.
bullet: Full voiceover, an original score, based on authentic ballet experiences.

All Good Things is my MFA thesis work at USC. It combines many of my passions, both professional and personal: dance, movement, mental health, education, the magical girl genre, and experimental design.

The game culminates in about 30 minute of standing gameplay, and it aims to teach a short phrase of ballet like movement, eventually leading up to players being able to freestyle. The gameplay introduces real dance techniques that both beginners and pros work on, such as use of head, coordination with lower body with upper, and emotional/artistic intention.

Beyond the dance based gameplay, the narrative and world building remains accurate to the highly expectant and strict atmosphere of the ballet space I grew up in.

This labor of love features full voice acting, orignal music, and a lot of thoughtful and difficult art/tech/design work; the full fantastic team can be found on the game's website.
:::

:::row
title: Game Screenshots Gallery
images: agt10.jpg, agt11.jpg, agt12.jpg, agt14.jpg, agt13.jpg, agt16.jpg, agt17.jpg
side: full


Webcam overlay is stitched ontop of the screenshots to show player's movement at the time of gameplay capture. Gameplay begins and repeats in a studio environment and enters the stage for player performance.

:::

:::row
title: Designing for Dance & Screen
images: agtdesign3.jpg, agtdesign1.png, agtdesign2.png
side: left
bullet: Real training, condensed into repetition, multitasking, risk, and resilience.
bullet: The screen represents a studio mirror with harsh narrative events landing on the character, not the player.

How could we condense the investment and time of authentic dance training into a repeatable short experience?

I broke the idea of mastery into core aspects: repetition, multitasking, accumulation, risk, and resilience. These traits could sum up what it means to be really great at something. Our game design scaffolds each aspect in sequence so that players iterate, learn, and improve.

We use the game screen like a mirror that you would scrutinize in a ballet studio. 

The avatar shows the player where they are in space and their pose accuracy but does not represent their one to one likeness. Because the narrative and ballet can be extremely tough or serious, I was careful to direct the events towards the character, not the player themselves.
:::

:::row
title: Major Pivots in Development
images: agtpivot1.png, agtpivot2.png, Screenshot 2026-05-07 050528.png, Screenshot 2026-04-13 164400.png, Screenshot 2026-04-01 181512.png
side: right
bullet: Choreography is taught by screen area, so later steps already have a place to go. #design
bullet: The last level drops the body outline for expression, the way practice changes with age.

Because we're already using the screen as a mirror, we deepened the association between screen space and dance moves. Instead of teaching linear, we teach in choreography sections made distinct by the area of the screen (Yichen Pan, Lead Design). When players reach the lower body gameplay, they are primed to move to the correct space with the correct movement. #design

In the last level of the game, we removed the body contour guidance, leaving only hand animated lines. This pivot is meant to keep the last level physically accessible, non punitive, and more about expression than technique. The design choice mirrors what happens to many dancers as they get older.

:::

:::row
title: Experimental Pipelines: Unity + Touchdesigner
image: agtsystem.png, Screenshot 2026-09-22 213844.png
side: left
bullet: TouchDesigner VFX stream into Unity to coach movement, trimmed to what the GPU can hold. #tech #design

We stream key Touchdesigner VFX to the Unity game scene. These VFX interactions are designed to improve or help player's movement quality or artistic intention. #tech #design

In tech art, we found it best to only keep strictly neccessary real time VFX and assets in Touchdesigner for performance on GPU. We had started development before the POPs operators update from Derivative so many of our TD assets are optimized as SOPs or GLSLs.

:::

:::row
title: Player Controller Avatar
video: https://youtu.be/r_pR5W2oai8
side: right
bullet: Webcam latency is inevitable, so looser particles make the body feel responsive anyway.

Technology wise, we found latency from the webcam to be unavoidable. We considered multiple changes to the playercontroller, like Live2D or image segmentation. 

Instead, we loosened the particles surrounding the 3D model as a power-up (pictured later in the video), so that the controller feels better to move even if there is a delay. 

:::

:::row
title: a System that Translates & Teaches Dance
images: Screenshot 2026-03-03 123659.png, Screenshot 2026-03-24 032121.png, Screenshot 2026-04-21 170922.png
side: full
bullet: Any filmed dance can become a level: 2D frames, an outlineshader, with VFX and voice in a sequence. #realtime

Our pipeline for turning dance into a "level" actually could be used on any kind of dance.

A video filmed of the dancer is turned into 2D black and white animation frames via script. 

The frames are filled step by step in a csv, which downloads via script as a scriptable object in Unity. An art shader turns the grames into an outline, with several informational effects.

Another much more complicated csv refers to the previous scriptable object, dictating dance moves in sequence with the appropriate realtime VFX, voiceover, and more. #realtime

As a result, we have created a high effort but packageable way to translate and experience dance digitally and imaginatively at an unexpected depth.

:::

:::row
title: Production Tools
images: Screenshot 2026-09-22 214753.png, Screenshot 2026-09-22 214859.png, Screenshot 2026-09-22 215006.png
side: left
bullet: Jira for priorities, Discord for tasks, then burndown sheets when the team got small. #production

As lead producer, I managed distribution of information, deadlines, delegation, and work well-being. Alongside an art producer and engineering producer, we managed overall priorities and blockers on Jira but delivered tasks via organized Discord threads. We found this to be most effective for general members' productivity and understanding, reducing as much friction as possible between meetings.

We released sprint announcements every two months, detailing the overall goals and time span of the sprints. When the working team got smaller towards the end of each major deadline, we used burndown charts and daily color coded sheets to track progress and to do lists. #production
:::

:::row
title: Production: Full Voiceover &  Orchestra
images: IMG_0262.JPG, IMG_0274.JPG, IMG_0328.JPG, Screenshot 2026-09-22 214613.png
side: right
bullet: Kensington Tallman and Crispin Freeman, directed by Sarah Elmaleh, with a live student orchestra.

We are incredibly lucky to have Kensington Tallman voice ANNA and Crispin Freeman voice ROTH, with Sarah Elmaleh as voice director, casting, and external advisor.

We also are so honored to partner with Music in Games Society (MGS) for talented musicians to play the original game score.
:::

:::row
title: Psychology of Characters Roth & Anna
images: agtnarrative.png, agtanna.png
side: full
bullet: Anna is hard on herself. Roth means well but pushes too far. #narrative
bullet: Three acts told through the environment, art shaders, and audio plays.

Anna is a talented young ballerina who loves dance but is hard on herself. Roth is her traditionally strict teacher, who sees Anna as his next ballet star. He may mean well, but how much can Anna take before it's too much? #narrative

The player as Anna experiences a traditional three act narrative structure, though abstract. The emotional intensity and story events are told through environment art, Anna's 3D model shaders, and audio play.

Both writer Darcy and I have core memories and nuanced takeaways about ballet training. We worked initially by reflecting on our shared experiences, writing short specific moments that Anna might experience in class or on stage. We iterate on the dialogue to keep Roth and Anna's motivations and personalities consistent. The script is then further shaped to meet design needs, with voiceover lines categorized as narrative, instructional, or efforts.
:::

:::row
title: Webcam Limits & Accessibility Thoughts
images: Screenshot 2026-05-07 072007.png, agtusability.png
side: right
bullet: Playable on most normal webcams: Calibration walks you through the setup and a T-pose.

Using computer webcam presents a lot of limitations, like lighting, set up, tracking fidelity, etc. A core requirement I set for my thesis is that the game needs to be accesible and packageable, specificially playable without additional expensive hardware. 

We try to mitigate the limitations through a thorough calibration process that smoothly leads players through set up and T-posing. 
:::

:::row
title: 
images: agtplay.jpg, agtplay2.jpg
side: full

However, the game is best experienced in an installation format with a large screen, lights, and curtains with non black clothing.
:::

:::row
title: Thesis Paper


Find my full thesis paper here: [USC Digital Library](https://digitallibrary.usc.edu/Share/57443u0n16lwkk8722itpt12o3g855j2).
:::
