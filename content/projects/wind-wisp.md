---
title: the Wind and the Wisp
description: Grief game where players blow via microphone to help rebuild a garden.
image: windwisp1.png
tags: games
collaboration: Sammy Chuang, USC Games, various
roles: Lead Designer
tools: Unity, ClickUp
play: https://store.steampowered.com/app/3729770/The_Wind_and_the_Wisp/
playlabel: play
hasLink: true
---

:::row
title: Concept & Experience Goals
images: Screenshot 2026-10-04 004443.png, WindAndTheWisp-Gameplay-Screenshot-7-1920x1080.png, 20250314_Art_IntroHill.png, 20250314_Art_FMNIntroSetDressing.png, WindAndTheWisp-Gameplay-Screenshot-13-1920x1080.png
side: full
bullet: Blow into the mic as the wind to help the wisp replant a garden.
bullet: Grief mapped onto breath, from anger to acceptance, with spacebar as an accommodation.

The game uses the microphone as its core interaction: blowing manifests in the world as the wind personified, helping a ghost character, the Wisp, rebuild a dilapidated garden. The wisp and the wind find flowers and replant them in their garden together.

The game director Sammy Chuang focused the team on how phyiscal breathing connects with emotions involved in the process of grief, including depression, anger, numbness, and acceptance. You can play fully with blowing or pressing space bar as an accomodation. 

As design lead, I also had a personal connection with the concept, having lost a friend to self exit. The team researched and worked to translate somatic feelings of personal grief into a game experience, using minimal text and dialogue. It was also important to us to express a positive outlook on life after loss.
:::

:::row
title: A Streamer Reacts to Our Final Level
video: https://youtu.be/DV452pMwaVM?si=U5BYfybH2ywBkEuk&t=1110
side: full
bullet: Gameplay reaction caught on a stranger's stream.

Thumbnail used by the streamer and streamer playthrough is NOT affiliated with the Wind and the Wisp dev team! 

Found video with delight one day when scrolling Youtube. 

This last level represents acceptance or the sigh of relief that happens when you reach an end. I had the scene of Narnia's Reepicheep paddling to the world's end amongst miles of lilies in mind from the conception to finish of the level. I hoped to create feelings of wonder, bittersweetness, and joy in the player. 
:::

:::row
title: Designing Within Microphone Limitations
video: https://youtube.com/shorts/GyZ3IQIq778 
side: right
bullet: Dropped grief-specific breathing patterns for simple blows and interactions

The final interactions and puzzles using blowing are simple, physical obstacles, lock and key, etc. Originally, we had plans to track different breathing rhythms associated with each flower and its grief emotion. Players would blow to trigger the wind, but to trigger a flower's unique ability had to breathe in the correct pattern, such as box breathing (in for four, hold for four, out for four).


:::

:::row
title: 
image: Screenshot 2026-10-03 005412.png
side: full
bullet: Complex breathing felt right, but the mic could not identify it. Focused instead on what player breath impacts in the world.

I prototyped a first iteration, finding that box breathing, sustained breathing, and a sigh of relief felt effective to players. However, the microphone had trouble detecting patterns accurately enough, so we regrouped, tying the impact of a player's breathing to the emotion rather than the breathing itself. For example, blowing to break rocks is explosive and sudden - like anger. 
:::


:::row
title: Tutorialization & Blockmesh
images: Screenshot 2026-10-03 003603.png, Screenshot 2026-10-03 003523.png, 
side: left
bullet: A dandelion HUD appears only when the mic can change the world.

Levels, particularly the first intro level that set up gameplay precedents, went through several iterations. I identified the aspects of the game we needed to teach the player, starting playtests early. I also brainstormed ways to show what can be blown in the world and how we can represent the blow type/stregnth. Along with the UX designer's iterations, this became a dandelion/flower HUD that appeared whenever the player could interact with the game world by mic.
:::

:::row
title: 
image:  Screenshot_2024-09-03_224646.png, Screenshot 2026-10-03 005121.png
side: full
bullet: Janky prototypes saved time and resources
bullet: Wisp autopathing read like a cutscene, and made it clear the player is the wind. #design

For level design, we did a lot of internal playtests between designers to check understanding and experience goals, communicating with sketches and notes overtop screenshots. As levels (or features) strengthened, I passed levels to the director and lead usability along with prepped design questions for players to answer. 

The director and I were also quick to eliminate tutorialization ideas that proved unproductive; I often did physical or "janky" fast first digital prototypes to check the idea's potential - before using any of our limited resources.

My suggestion for wisp's autopathing was an effective example of this. It became clear very fast that people thought the wisp's movement meant a cutscene and this issue led to a large forumlative discussion during production: are players the wind or the wisp or both? In hindsight the answer is obvious (players are the wind), but the prototype clarified and unified the team. #design
:::

:::row
title: Level Iteration & Camera Work
images: Screenshot 2026-10-03 005313.png
side: right
bullet: One-off camera zones were scripted with an engineer so mic polish stayed on track.
bullet: Camera framing carries the story instead of text.

On top of the gameplay iteration, designers came up with new ideas that often required more internal tooling. Part of my responsibility involved documenting and prioritizing tool needs for engineers. 

For example, the "forget me not" level had unique camera zone needs: the designer needed to place several overlapping zones but this tooling would not serve the rest of the game. Instead, we placed the designer directly with an engineer for the final level iterations and directly turned zones on and off via script during gameplay. This way, we wouldn't place more pressure on engineering already focused on polishing the mic detection.

Because the game is linear with little text, much of the storytelling comes from the camera. I took great care in showing details with framing or more extreme emotions with camera movement. For example, showing an empty sky before the level begins to end the level on a shot full of stars. 


:::

:::row
title: 
video: https://youtu.be/0spRb1ex4QU
side: full


First digital mock up of the last quest, to retrieve the Lily of the Valley, the flower able to "unpetrify" stone. 
:::

:::row
title: 
video: https://youtu.be/VeBhqaJvenw
side: full
bullet: The same level right before passing to Art for set dressing. 



I worked directly with another designer to finalize the level, combining a boat feature from another part of the game that got cut. We also documented our vision for Art and Audio, for the boat shader and musical details. The boat is meant to be part star, which explains how it too unpetrifies and flies carrying the wisp along. Unlike other levels, the wisp and the wind move together on a track.
:::

:::row
title: Design & Narrative Control Scope
images: Screenshot 2026-10-03 005351.png, Screenshot 2026-10-03 005832.png
side: left
bullet: The director's paper boat combined with the dandelion feature, and scope creep disappeared. #production

One of my favorite things I learned during this production is how design controls scope. As indie and student devs, we had such limited resources and time with a lot of ambitious experience goals. We wanted to progress the garden rebuilding, the wind and the wisp's friendship, the breathing mechanic's evolution, the different worlds of the flower, and more - all without using text or dialgoue. 

I learned to make informed compromises and trust my gut regarding cutting or combining features, finding a taste for elegant and subtractive design. #production One of my strongest choices involved combining a paper boat point of interest, a huge favorite of the director's, with our existing dandelion feature. We used it's spline to carry the wisp into the air on a track. This took out our scope creep (having to iterate on the boat's control and location), while strengthing the experience and story.
:::

:::row
title: With the Director
image: IMG_5154.jpg 
side: right
bullet: we cut anything that was not confident, then creatively reshuffled narratie and design.

Towards the end of production, the director and I made a huge cut: anything that had not reached a certain level of confidence or done-ness got nixed. This left some holes in the narrative and design that took some creative rearranging to solve. We discussed different concerns and I proposed a few options of reshuffled levels and puzzles, including further simplifying some design to alleviate any extra burdens on engineering and art. 

I made a simple documentation for designers detailing the action steps of the entire final game.

Throughout the year, including the last stages of production, I sketched during meetings while I talked to better explain thoughts and proposals to the director or other collaborators. In this way, people could easily circle or point at the sketches.
:::

:::row
title: 
video: https://youtu.be/YmSrlb7GSpM
side: full
bullet: An Instagram-story animatic at the start of preproduction.

During preproduction, so much felt unknown. I made an animatic out of Instagram stories to check my understanding of the director's vision. In hindsight, so much has evolved and it feels profoundly fulfilling to see the progression of the project.
:::

:::row
title: With Other Leads & our Designers
images: Screenshot 2026-10-03 003736.png, Screenshot 2026-10-03 003801.png
side: right
bullet: I communciated via sketching, summarizing, mirroring, and more.

I grew a great deal being on a large game team, as a lead and a designer. I enjoyed collaborating and facilitating, finding my strengths and weaknesses. I gathered an arsenal of different ways to communciate, from sketching to mirroring others to paintovers. I also felt well prepared for future productions; I got a lot of practice quickly summarizing the most relevant information different members of the team needed at that moment especially for the current task.
:::


