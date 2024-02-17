<script>
  // Color Backgrounds
  export let bgColor = undefined;

  // Gradient Backgrounds
  export let bgGradient = undefined;

  // Image Backgrounds
  export let bgImage = undefined;
  export let bgSize = undefined;
  export let bgPosition = undefined;
  export let bgRepeat = undefined;
  export let bgOpacity = undefined;

  // Video Backgrounds
  export let bgVideo = undefined;
  export let bgVideoLoop = undefined;
  export let bgVideoMuted = undefined;

  // Iframe Backgrounds
  export let bgIframe = undefined;
  export let bgInteractive = undefined;
</script>

<section
  data-background-color={bgColor}
  data-background-gradient={bgGradient}
  data-background-image={bgImage}
  data-background-size={bgSize}
  data-background-position={bgPosition}
  data-background-repeat={bgRepeat}
  data-background-opacity={bgOpacity}
  data-background-video={bgVideo}
  data-background-video-loop={bgVideoLoop}
  data-background-video-muted={bgVideoMuted}
  data-background-iframe={bgIframe}
  data-background-interactive={bgInteractive}
>
  <slot />
</section>
