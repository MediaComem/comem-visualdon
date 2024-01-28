<script>
  export let trim = true;
  export let noescape = false;
  export let lineNumbers = false;
  export let lineStartFrom = false;
</script>

<pre>
		<code
    data-trim={trim}
    data-noescape={noescape}
    data-line-numbers={lineNumbers}
    data-ln-start-from={lineStartFrom}>
				<slot />
		</code>
</pre>
