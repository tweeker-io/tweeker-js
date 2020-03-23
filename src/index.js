export const embedTweeker = (args) => {
  if (!args.businessId) {
    throw new Error('Expected businessId as key in arguments')
  }
  setOptions(args.businessId)
  injectScript(args.scriptVersion)
}

const setOptions = (businessId) => {
  return window.TweekerSettings = {
    businessId: businessId
  }
}

const injectScript = (scriptVersion = 'latest') => {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://embed.tweeker.io/${scriptVersion}.js`

  const headOrBody = document.head || document.body

  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. tweeker embed.js requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return script
}