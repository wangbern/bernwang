---
title: If Fish Could Scream
description: Interactive webcam tracked gallery at the Grand LA.
image: fish1.jpg
tags: creative tech
collaboration: Zeping Sun, the Grand LA
roles: Designer
tools: Touchdesigner, Mediapipe
play: https://vimeo.com/1111814252?fl=pl&fe=sh
playlabel: view
hasLink: true
---

:::row
title: Concept & Theme
image: IMG_3370.png
side: left

If Fish Could Scream presents the audience a choice: control the fish swimming in water or allow it to peacefully exist. It is often instinctive to impose our will on the beautiful, the trivial, and the ephemeral especially in the pursuit of our dreams...but if a fish could speak, would it scream? 

This interactive installation uses webcam tracking to call into question how focus and ambition controls our lives.

The piece was a part of a greater annual exhibition at the Grand LA, Concrete Oasis, with creative director and professor Lisa Mann.

Right across the Walt Disney Concert Hall, the exhibition stayed up for about two weeks, open to the public for two evenings. 
:::

:::row
title: Mediapipe for Webcam Detection
image: IMG_2161.png
side: right

The fish swims idlly in place. When the webcam detects a hand, the water darkens and distorts, following the hand's (x, y). If the hand pinches, the fish will deepen in saturation and follow the hand pinch gesture.

I use Mediapipe in Touchdesigner and logic nodes connect to the color, noise (water), and fish look at systems. #tech
:::

:::row
title: Touchdesigner System
video: https://youtu.be/hgUqKJtW9DY
side: left

We use a bullet solver CHOP for the fish following pinch gesture.

Sprinkle SOP, noise TOP, displace TOP, ramps and feedback loops for the water and fish visuals.

This was pre-POPs era, meaning initial use of ParticleGPU slowed down the real time interaction considerably. We amended with SOPs instead during the testing process. #realtime

:::

:::row
title: Emergent Play
video: https://youtube.com/shorts/r3c8S2_vnbY?feature=share
side: right

People begin to play with each other without prompting or instruction: one at the screen, and the other at the webcam.

Eventually, people even began to play "monkey in the middle" chasing the fish and water distortion, while their friend avoided them on the webcam control. #design
:::

:::row
title: Projection Mapping & Installation
image: IMG_2906.jpg
side: left

To maximize the webcam detection, I set up selfie lights and marked the area on the floor for guests to step on. This helped the interaction go smoothly as the lights helped the webcam see in the dark gallery (especially at night) and the lines on floor set the distance guests could expect the "magic" to work.

We used katanmapper to fill the space. In the future, I rather stick to stoner to keep resolution as sharp as possible. The piece looked best when filling the space from the lights to floor. We worked around sloped floors, and wall fixtures that we covered with white tape.

The Grand LA gave us generous time to test pre opening week and we got to test more with the fish's color and shape for visibility and projector distance before finalizing.
:::

:::row
title: Pinch & Move to Interact with the Fish
video: https://vimeo.com/1080342827?fl=pl&fe=sh
side: full

Gallery guest tries out the interaction for the first time.
:::

:::row
title: Gallery
images: IMG_3134.PNG, IMG_3135.PNG, If Fish Could Swim.png
side: full

:::


