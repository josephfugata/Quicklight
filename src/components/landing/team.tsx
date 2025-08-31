import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    name: 'Juan Dela Cruz',
    role: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    bio: 'With a passion for renewable energy, Juan leads the team with a vision for a sustainable Philippines.'
  },
  {
    name: 'Ana Santos',
    role: 'Lead Engineer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708e',
    bio: 'Ana oversees all system designs, ensuring every project meets the highest standards of safety and efficiency.'
  },
  {
    name: 'Miguel Tan',
    role: 'Head of Operations',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709f',
    bio: 'Miguel manages our installation teams, guaranteeing a smooth and professional experience for every customer.'
  }
];

export default function Team() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-2">Our Experts</Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet the Team
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
                The dedicated professionals powering our mission for a brighter tomorrow.
            </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl font-bold">{member.name}</CardTitle>
                <p className="text-sm font-medium text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
