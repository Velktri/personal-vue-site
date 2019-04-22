<template>
    <div>
        <div class="bg-top">
            <div class="flex section-top container">
                <div class="content-top">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laboriosam officia ab fuga! 
                    Quisquam, adipisci incidunt soluta inventore quis nam ab tempora tenetur quidem expedita deserunt, 
                    itaque cupiditate magnam, at et praesentium quasi. Doloremque odio magni non quas, animi quod.
                </div>

                <div class="image-top">
                    test
                </div>
            </div>
        </div>

        <div class="section-mid">
            Mid Section
        </div>

        <div class="footer">
            footer
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.flex {
    display: flex;
    align-items: center;
}

.content-top {
    padding: 20px;
    line-height: 2.5rem;
    text-align: justify;
    font-size: 1.5rem;
    font-family: Calibri, Cambria, Cochin, Georgia, Times, 'Times New Roman', sans-serif;
}

.section-top {
    height: 500px;
}

.bg-top {
    background-color: rgb(94, 94, 199);
}

.image-top {
    max-width: 300px;
    min-width: 300px;
    height: 300px;
    background-color: rgb(105, 41, 54)
}

.section-mid {
    height: 500px;
    background-color: rgb(114, 214, 114);
}

.footer {
    height: 200px;
    background-color: rgb(136, 136, 136);
}
</style>
