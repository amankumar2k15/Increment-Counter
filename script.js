const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    //   console.log(counter)
    counter.innerHTML = 0;

    const updateCount = () => {
        targetCount = +counter.getAttribute('data-target')
        // targetCount = +counter.dataset.target
        // console.log(targetCount)
        const startingCount = Number(counter.innerHTML);

        const increament = targetCount / 100;

        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + increament)}`
            setTimeout(updateCount, 200);

        }
        else {
            counter.innerHTML = targetCount;
        }
    }

    updateCount();

})




























