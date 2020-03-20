
export const embedTweeker = (businessId, scriptVersion = 'latest', options = {}) => {
  setOptions(businessId, options)
  injectScript(scriptVersion)
}

const setOptions = (businessId, options = {}) => {
  return window.TweekerSettings = {
    ...options,
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