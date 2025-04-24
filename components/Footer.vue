<template>
	<div class="bg-white container mx-auto box-border px-4 md:px-[75px] py-[30px]">
		<div class="flex flex-col md:flex-row items-start mb-[30px]">
			<div id="links" class="grid grid-cols-2 md:flex md:flex-row gap-6 md:gap-10 pr-0 md:pr-5 flex-1 mb-6 md:mb-0">
				<div class="w-auto">
					<h3 class="title">La empresa</h3>
					<ul>
						<li><a target="_blank" targe="" href="#">Quiénes Somos</a></li>
						<li><a target="_blank" href="#">Misión, Visión e Historia</a></li>
						<li><a href="#">Ética</a></li>
						<li><a href="#">Nuestras Sucursales</a></li>
					</ul>
				</div>
				<div class="w-auto">
					<h3 class="title">Información</h3>
					<ul>
						<li><a href="#">Aviso de Privacidad</a></li>
						<li><a href="#">Habeas Data</a></li>
						<li><a href="#">Términos y condiciones de promociones</a></li>
					</ul>
				</div>
				<div class="w-auto">
					<h3 class="title">Club Vida Sana</h3>
					<ul>
						<li><a href="#">Beneficios del Club</a></li>
						<li><a href="#">Ley 2300</a></li>
						<li><a href="#">Consulta Aliados</a></li>
					</ul>
				</div>
				<div class="w-auto">
					<h3 class="title">Contacto</h3>
					<ul>
						<li><a href="tel:+573157823477">315 782 3477</a></li>
						<li><a href="/pqrs">Radicar PQRS</a></li>
						<li><a href="mailto:servicioalcliente@droguerialaeconomia.com"><small>servicioalcliente<br>@droguerialaeconomia.com</small></a></li>
					</ul>
				</div>
			</div>
			<div class="qr-cont w-full md:w-auto">
				<div id="qr-pc" class="mb-6">
					<h3 class="tx-c">¡Descarga gratis la APP!</h3>
					<div class="flex qr-box">
						<img src="/assets/qr.png" alt="" style="width: 80px;">
						<div style="width: 20px;"></div>
						<img src="/assets/logo-corto.svg" alt="" style="width: 80px;">
					</div>
				</div>
				<div id="redes" class="flex flex-col">
					<h4 class="mb-1">Síguenos en:</h4>
					<div class="justify-items-start flex gap-4">
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@droguerialaeconomia9474"><img src="/assets/youtube.svg" alt="youtube"></a>
						<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/droguerialaeconomia/"><img src="/assets/instagram.svg" alt="instagram"></a>
						<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drogueriaslaeconomia"><img src="/assets/facebook.svg" alt="facebook"></a>
						<a target="_blank" rel="noopener noreferrer" href="https://wa.link/fd1qo8"><img src="/assets/whatsapp.svg" alt="whatsapp"></a>
					</div>
				</div>
			</div>
		</div>
		
		<div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
			<div class="text-center md:text-left">
				© 2024 Droguería La Economía. Todos los derechos reservados. v5.1  - 
				<a href="/empresa/politicas" style="text-decoration: underline;"><b>Política de privacidad</b></a>
			</div>
			<div class="powered">
				<div>powered by</div>
				<div style="width: 10px;"></div>
				<a href="https://mooba.co/" target="_blank"><img src="/assets/mooba.svg" alt="mooba" style="margin-top: -8px;"></a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
h3 {
    display: block;
    font-size: 1.17em;
	margin-bottom: 4px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 500;
    unicode-bidi: isolate;
}
ul li {
    text-align: left;
    padding: 4px 2px;
    cursor: default;
    font-weight: 400;
    margin: 2px 0;
    font-size: 0.9em;
    max-width: 190px;
}

.qr-box {
	display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
}

#redes {
  display: flex;
  flex-direction: column;
}

#redes a {
  display: inline-block;
}

#redes img {
  width: 32px;
  height: 32px;
}

#redes img:hover {
  transform: none;
}

.powered {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 768px) {
    ul li {
        max-width: 100%;
    }
    
    .qr-box {
        margin: 0 auto;
        max-width: 280px;
    }

    #links {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>