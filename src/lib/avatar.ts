export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase()
  return `${parts[0]![0]}${parts[parts.length - 1]![0]}`.toUpperCase()
}

export function seedToHue(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 360
}

export function avatarGradient(seed: string): string {
  const hue = seedToHue(seed)
  return `linear-gradient(135deg, hsl(${hue} 70% 45%), hsl(${(hue + 40) % 360} 65% 32%))`
}
