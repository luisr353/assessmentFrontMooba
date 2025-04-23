<template>
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Botiquín Card -->
      <div class="bg-white p-6 rounded-lg relative">
        <div class="flex items-center gap-2 mb-4">
          <h2 class="text-2xl font-semibold">Botiquín</h2>
          <div class="icono"><img src="/assets/icons/pildora.png" style="width: 24px"></div> 
        </div>
        <p class="text-gray-600 mb-6">La selección ideal de productos para tu cuidado en todo momento.</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/dolex.png" alt="Dolex" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Cabeza y general</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/tos.png" alt="Advil" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Tos</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/multivitaminico.png" alt="Zinc" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Multivitamínico</p>
          </div>
        </div>
      </div>

      <!-- Cuidado del bebé Card -->
      <div class="bg-white p-6 rounded-lg relative">
        <div class="flex items-center gap-2 mb-4">
          <h2 class="text-2xl font-semibold">Cuidado del bebé</h2>
          <div class="icono"><img src="/assets/icons/tetero.png" style="width: 24px"></div> 
        </div>
        <p class="text-gray-600 mb-6">Todo un mundo de productos para los consentidos de la casa.</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/panal.png" alt="Huggies" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Pañales</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/nestogeno.png" alt="Nestogeno" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Leches infantiles</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/panito.png" alt="Pañitos" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Pañitos húmedos</p>
          </div>
        </div>
      </div>

      <!-- Salud y belleza Card -->
      <div class="bg-white p-6 rounded-lg relative">
        <div class="flex items-center gap-2 mb-4">
          <h2 class="text-2xl font-semibold">Salud y belleza</h2>
          <div class="icono"><img src="/assets/icons/unas.png" style="width: 24px"></div> 
        </div>
        <p class="text-gray-600 mb-6">Encuentra aquí las marcas destacadas para cuidar de ti y tu familia.</p>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/facial.png" alt="Tratamiento facial" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Tratamiento facial</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/shampoo.png" alt="Shampoo" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Shampoo y acondicionador</p>
          </div>
          <div class="text-center">
            <div class="relative">
              <div class="absolute inset-0 bg-gray-100 rounded-full -z-10"></div>
              <img src="/assets/products/corporal.png" alt="Tratamiento corporal" class="w-24 h-24 object-contain mx-auto relative z-10">
            </div>
            <p class="mt-2 text-sm font-medium">Tratamiento corporal</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No se requiere lógica adicional por ahora
</script> 