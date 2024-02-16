<script>
  export let referenceLink;
  export let referenceText;
</script>

<small
  ><a href={referenceLink} target="_blank"
    ><p>
      <code class="red"> ↳ {referenceText}</code>
    </p></a
  ></small
>
