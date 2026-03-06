'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string[]
  alt: string
  title?: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setCurrentIndex(0)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((i) => (i === 0 ? selectedImage!.src.length - 1 : i - 1))
  }

  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((i) => (i === selectedImage!.src.length - 1 ? 0 : i + 1))
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => openLightbox(image)}
            className="group relative aspect-square rounded-xl overflow-hidden border border-[#262626] hover:border-primary/50 transition-smooth"
          >
            <Image
              src={image.src[0]}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Photo count badge */}
            {image.src.length > 1 && (
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md">
                {image.src.length} photos
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white">
                <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                {image.title && <h3 className="font-semibold">{image.title}</h3>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-lg border border-[#262626] hover:border-primary hover:bg-primary/10 flex items-center justify-center text-white transition-smooth"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          {selectedImage.src.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border border-[#262626] hover:border-primary hover:bg-primary/10 flex items-center justify-center text-white transition-smooth z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src[currentIndex]}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next */}
          {selectedImage.src.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg border border-[#262626] hover:border-primary hover:bg-primary/10 flex items-center justify-center text-white transition-smooth z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Title + dot indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            {selectedImage.title && (
              <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#262626]">
                <p className="text-white font-semibold">{selectedImage.title}</p>
              </div>
            )}
            {selectedImage.src.length > 1 && (
              <div className="flex gap-2">
                {selectedImage.src.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(i) }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
