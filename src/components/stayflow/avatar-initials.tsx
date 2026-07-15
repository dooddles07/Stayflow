import { Avatar, AvatarFallback } from '#/components/ui/avatar'
import { avatarGradient, getInitials } from '#/lib/avatar'
import { cn } from '#/lib/utils'

export function AvatarInitials({
  seed,
  className,
}: {
  seed: string
  className?: string
}) {
  return (
    <Avatar className={cn('size-9', className)}>
      <AvatarFallback
        className="text-xs font-medium text-white"
        style={{ background: avatarGradient(seed) }}
      >
        {getInitials(seed)}
      </AvatarFallback>
    </Avatar>
  )
}
