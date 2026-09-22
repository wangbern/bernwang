---
title: Biosignal Blackout
description: Realtime performance visuals using dancers' biometric data.
image: biosignal1.jpg
tags: creative tech, performance
collaboration: Mirrored Glass, Shawescape, Andy Arts Center, Ari Sol
roles: Interaction Designer, Touchdesigner Artist & Technician
tools: Touchdesigner, Python, Respiration Belt & Heartrate Sensors
play: https://www.instagram.com/reel/DcRZfeUzQ6J/?stkn=MTc0aHB1aGJhaGtmYQ==
playlabel: preview
hasLink: true
---

:::row
title: Visual Sketches + Design Prototyping
image: Screenshot 2026-09-17 002444.png
side: left

Working with the lead technologist, I created fast visual sketches based on the DJ's references, and the artistic director's written script.

I broke down the available content into dynamics and intensity across time, act 1, act 2, etc. I tested colors and different levels of visual simulatation, pairing them to different acts. For example, because act is meant to be "groovy and light" I sketched soft powdery visuals that move gently. #design

In response to these initial prototypes, collaborators expressed their preference for more literal representations for the blood, breath, and heart. 

:::

:::row
title: Receiving & Visualizing Biometric Data
image: 000A1936.jpg
side: right

Going towards that direction, I made visuals less abstract: blood cells, ribcage, human shapes, particles that breathe, muscle-like textures with movement like pulsing, spreading, or contracting.

We used a respiration belt to measure breathing force. The force was then mapped to a few ranges that powered the visuals. For example, a full breath out rotated and blended 3D models which gave color shifting particles different shapes to move to. Shorter inhales or exhales further changed the rotation and blend.

For heart rate measurements, we used Verity Sense Optical Heart Rate Sensor. We only used its heart rate frequency to power things like pulsing color, restarting smear effects, and subtly expanding blood cell sizes. I found that the heart rate data looks persistent and strong if used aggressively and wanted to find ways where it just feels like a heartbeat rather than being too dizzy and stimulating.

I included a resting switch that allowed visuals to transition from their idle animation to the live data from sensors.

Smaller composite details such as bloom or camera FOV are also affected by the biometric data, giving visuals a more lifelike and subtle feeling when directly powered by performers. #tech
:::

:::row
title: Final Visuals (color pre-adjusted for event site's projectors/lights)
images: TDMovieOut.3.png, TDMovieOut.12.png, TDMovieOut.23.png, TDMovieOut.27.png, TDMovieOut.31.png, TDMovieOut.37.png, TDMovieOut.41.png
side: full

Color, shape, rhythm, and movement of each visuals are driven by the dancers' breathing and heartrates. Adjustment to how intense the mapping is could be made on the fly via the show system during the show. 
:::

:::row
title: Showrunner System
image: Screenshot 2026-09-17 002031.png
side: left

I created a showrunner UI screen that links to the entire visual system. The person running the visuals during the show can simply press the respective buttons for each progression; they would also not need to deselect previous buttons. They are also able to view the live biometric data and switch from idle to live (green) for each sensor. Intensity for the sensors can also be adjusted via the sliders. For ease, they also can see what is going out to the projector.

At their request, I also included their preshow and end show motion graphics set to loop automatically. I also created a brief logic chop system to catch other use cases, ie. deselecting buttons, preshow or endshow needing to always start at the beginning.

All transitions use preset with the Trigger node in Touchdesigner. The clients and I discussed using Midi versus buttons, and buttons were most suitable for the straightforward and linear nature of the show run. #realtime
:::

:::row
title: Touchdesigner POPs
image: 000A1334.jpg
side: right

Touchdesigner came out with the niftiest operator family this past year. It has made using 3D models or instancing significantly more efficient and very fun. Previously, I had been using "hacky" ways like SOPS or images or modeling with points/copy trying to avoid using CPU.

With this project, I used POPs operators to try and learn more. In particular, I used Trail, Twist, Blend, and Field.
:::

:::row
title: Projection Mapping & Installation
image: 000A1482.jpg
side: left

Part of role involved advising on projection mapping and installation. I guided on what questions to ask the venue, which physical preparations needed to be considered, and what settings or equipment was necessary depending on their vision. #production

I also provided tutorials or explanations as needed on the show system as well as live trouble shooting when not on site.
:::
